import Foundation

final class ApiClient {
    var token: String?
    let baseURL: URL?
    init(baseURL: URL? = URL(string: Config.baseURLString)) { self.baseURL = baseURL }

    private func request<T: Decodable>(_ path: String, method: String = "GET", body: Data? = nil) async throws -> T {
        guard let base = baseURL, !Config.useMocks else { throw URLError(.badURL) }
        let url = base.appendingPathComponent(path)
        var req = URLRequest(url: url)
        req.httpMethod = method
        if let t = token { req.setValue("Bearer \(t)", forHTTPHeaderField: "Authorization") }
        if let b = body {
            req.setValue("application/json", forHTTPHeaderField: "Content-Type")
            req.httpBody = b
        }
        let (data, response) = try await URLSession.shared.data(for: req)
        guard let http = response as? HTTPURLResponse, (200..<300).contains(http.statusCode) else { throw URLError(.badServerResponse) }
        let dec = JSONDecoder()
        dec.dateDecodingStrategy = .iso8601
        dec.keyDecodingStrategy = .convertFromSnakeCase
        return try dec.decode(T.self, from: data)
    }

    func fetchPsixoloqlar() async throws -> [Psychologist] {
        if Config.useMocks { return MockData.psixoloqlar }
        do { return try await request("psychologists") } catch { return MockData.psixoloqlar }
    }

    func fetchSlotlar(psixoloqId: String) async throws -> [Slot] {
        if Config.useMocks { return MockData.slotlar }
        do { return try await request("slots?psixoloqId=\(psixoloqId)") } catch { return MockData.slotlar }
    }

    func createBooking(psixoloqId: String, slotId: String) async throws -> Booking {
        if Config.useMocks {
            return .init(id: UUID().uuidString, istifadəçiId: MockData.profil.id, psixoloqId: psixoloqId, slotId: slotId, status: "təsdiqləndi")
        }
        let payload: [String: Any] = ["psychologistId": psixoloqId, "slotId": slotId]
        let body = try? JSONSerialization.data(withJSONObject: payload)
        do { return try await request("bookings", method: "POST", body: body) } catch {
            return .init(id: UUID().uuidString, istifadəçiId: MockData.profil.id, psixoloqId: psixoloqId, slotId: slotId, status: "təsdiqləndi")
        }
    }

    func me() async throws -> UserProfile {
        if Config.useMocks { return MockData.profil }
        do { return try await request("me") } catch { return MockData.profil }
    }

    struct TokenResponse: Decodable { let accessToken: String?; let token: String? }

    func login(username: String, password: String) async throws -> Bool {
        if Config.useMocks { token = "mock"; return true }
        let payload = ["username": username, "password": password]
        let body = try? JSONSerialization.data(withJSONObject: payload)
        do {
            let res: TokenResponse = try await request("auth/login", method: "POST", body: body)
            token = res.accessToken ?? res.token
            return token != nil
        } catch { return false }
    }

    func refresh(refreshToken: String) async throws -> Bool {
        if Config.useMocks { return true }
        let payload = ["refreshToken": refreshToken]
        let body = try? JSONSerialization.data(withJSONObject: payload)
        do {
            let res: TokenResponse = try await request("auth/refresh", method: "POST", body: body)
            token = res.accessToken ?? res.token
            return token != nil
        } catch { return false }
    }

    func logout() async throws -> Bool {
        if Config.useMocks { token = nil; return true }
        do {
            let _: Empty = try await request("auth/logout", method: "POST")
            token = nil
            return true
        } catch { token = nil; return false }
    }

    struct Empty: Decodable {}
}
