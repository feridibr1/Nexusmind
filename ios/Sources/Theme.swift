import SwiftUI

extension Color {
    init(hex: String) {
        var h = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        if h.count == 3 { let r = String(h[h.startIndex]); let g = String(h[h.index(h.startIndex, offsetBy: 1)]); let b = String(h[h.index(h.startIndex, offsetBy: 2)]); h = r+r+g+g+b+b }
        var int: UInt64 = 0
        Scanner(string: h).scanHexInt64(&int)
        let r = Double((int >> 16) & 0xFF) / 255.0
        let g = Double((int >> 8) & 0xFF) / 255.0
        let b = Double(int & 0xFF) / 255.0
        self = Color(red: r, green: g, blue: b)
    }
}

struct Theme {
    static let primary = Color(hex: "#1e88ff")
    static let secondary = Color(hex: "#74D2E7")
    static let background = Color.white
}
