import SwiftUI

@main
struct NexusMindApp: App {
    var body: some Scene {
        WindowGroup {
            AppTabsView()
                .preferredColorScheme(.light)
        }
    }
}
