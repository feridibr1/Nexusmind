import Foundation

@MainActor
final class PsixoloqlarVM: ObservableObject {
    @Published var siyahı: [Psychologist] = []
    @Published var axtarış: String = ""
    private let api = ApiClient()
    func yüklə() async {
        if let data = try? await api.fetchPsixoloqlar() { siyahı = data }
    }
}

@MainActor
final class BookingVM: ObservableObject {
    @Published var slotlar: [Slot] = []
    @Published var sonBooking: Booking?
    private let api = ApiClient()
    func yüklə(psixoloqId: String) async {
        if let data = try? await api.fetchSlotlar(psixoloqId: psixoloqId) { slotlar = data }
    }
    func rezervEt(psixoloqId: String, slotId: String) async {
        if let b = try? await api.createBooking(psixoloqId: psixoloqId, slotId: slotId) { sonBooking = b }
    }
}

@MainActor
final class ProfilVM: ObservableObject {
    @Published var profil: UserProfile?
    private let api = ApiClient()
    func yüklə() async { if let p = try? await api.me() { profil = p } }
}
