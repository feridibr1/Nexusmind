import Foundation

struct Psychologist: Identifiable, Codable, Equatable {
    let id: String
    let ad: String
    let ixtisas: String
    let reytinq: Double
    let şəkilURL: String
}

struct Slot: Identifiable, Codable, Equatable {
    let id: String
    let tarix: Date
    let müddətDəqiqə: Int
    let mövcud: Bool
}

struct Booking: Identifiable, Codable, Equatable {
    let id: String
    let istifadəçiId: String
    let psixoloqId: String
    let slotId: String
    let status: String
}

struct UserProfile: Identifiable, Codable, Equatable {
    let id: String
    let ad: String
    let email: String
}
