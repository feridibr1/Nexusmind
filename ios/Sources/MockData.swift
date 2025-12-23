import Foundation

struct MockData {
    static let psixoloqlar: [Psychologist] = [
        .init(id: "p1", ad: "Dr. Emily Carter", ixtisas: "Anksiyete və Stress", reytinq: 4.8, şəkilURL: ""),
        .init(id: "p2", ad: "Michael Chen", ixtisas: "Münasibətlər", reytinq: 4.6, şəkilURL: ""),
        .init(id: "p3", ad: "Sarah Rodriguez", ixtisas: "Depressiya və Travma", reytinq: 4.7, şəkilURL: "")
    ]
    static let slotlar: [Slot] = [
        .init(id: "s1", tarix: Date().addingTimeInterval(3600), müddətDəqiqə: 60, mövcud: true),
        .init(id: "s2", tarix: Date().addingTimeInterval(7200), müddətDəqiqə: 45, mövcud: true),
        .init(id: "s3", tarix: Date().addingTimeInterval(10800), müddətDəqiqə: 30, mövcud: false)
    ]
    static let profil: UserProfile = .init(id: "u1", ad: "İstifadəçi", email: "user@example.com")
}
