import SwiftUI

struct AnaSehifeView: View {
    var body: some View {
        VStack(spacing: 16) {
            Text("NexusMind").font(.largeTitle).fontWeight(.bold)
            Text("Yenilikçi psixoloji dəstək platforması ilə balanslı həyat")
                .multilineTextAlignment(.center)
                .padding(.horizontal)
        }
        .padding()
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .background(Theme.background)
    }
}

struct PsixoloqlarView: View {
    @StateObject var vm = PsixoloqlarVM()
    var body: some View {
        NavigationView {
            List {
                ForEach(vm.siyahı) { p in
                    NavigationLink(destination: PsixoloqDetallarıView(psixoloq: p)) {
                        VStack(alignment: .leading) {
                            Text(p.ad).font(.headline)
                            Text(p.ixtisas).font(.subheadline).foregroundColor(.secondary)
                            Text(String(format: "Reytinq: %.1f", p.reytinq)).font(.caption)
                        }
                    }
                }
            }
            .navigationTitle("Psixoloqlar")
            .task { await vm.yüklə() }
        }
    }
}

struct PsixoloqDetallarıView: View {
    let psixoloq: Psychologist
    @StateObject var bookingVM = BookingVM()
    var body: some View {
        VStack {
            VStack(alignment: .leading, spacing: 8) {
                Text(psixoloq.ad).font(.title2).fontWeight(.semibold)
                Text(psixoloq.ixtisas).foregroundColor(.secondary)
            }.frame(maxWidth: .infinity, alignment: .leading).padding()
            List {
                Section("Mövcud slotlar") {
                    ForEach(bookingVM.slotlar) { s in
                        HStack {
                            Text(s.tarix.formatted(date: .abbreviated, time: .shortened))
                            Spacer()
                            Text("\(s.müddətDəqiqə) dəq")
                            if s.mövcud { Text("Mövcud").foregroundColor(.green) } else { Text("Dolu").foregroundColor(.red) }
                        }
                        .contentShape(Rectangle())
                        .onTapGesture {
                            Task { await bookingVM.rezervEt(psixoloqId: psixoloq.id, slotId: s.id) }
                        }
                    }
                }
                if let b = bookingVM.sonBooking {
                    Section("Rezervasiya") {
                        Text("Rezervasiya: \(b.id)").font(.caption)
                        Text("Status: \(b.status)").font(.caption)
                    }
                }
            }
            .task { await bookingVM.yüklə(psixoloqId: psixoloq.id) }
        }
        .navigationTitle("Detallar")
        .background(Theme.background)
    }
}

struct RezervasiyaView: View {
    var body: some View {
        VStack(spacing: 12) {
            Text("Rezervasiya").font(.title2).fontWeight(.semibold)
            Text("Seansınızı rahat vaxtda planlaşdırın")
        }
        .padding()
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .background(Theme.background)
    }
}

struct ProfilView: View {
    @StateObject var vm = ProfilVM()
    var body: some View {
        VStack(spacing: 12) {
            if let p = vm.profil {
                Text("Profil").font(.title2).fontWeight(.semibold)
                Text(p.ad)
                Text(p.email).foregroundColor(.secondary)
            } else {
                Text("Giriş").font(.title2).fontWeight(.semibold)
                Text("Zəhmət olmasa hesabınıza daxil olun")
            }
        }
        .padding()
        .task { await vm.yüklə() }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .background(Theme.background)
    }
}

struct AppTabsView: View {
    var body: some View {
        TabView {
            AnaSehifeView()
                .tabItem { Label("Ana səhifə", systemImage: "house") }
            PsixoloqlarView()
                .tabItem { Label("Psixoloqlar", systemImage: "person.3") }
            RezervasiyaView()
                .tabItem { Label("Rezervasiya", systemImage: "calendar") }
            ProfilView()
                .tabItem { Label("Profil", systemImage: "person.crop.circle") }
        }
        .tint(Theme.primary)
        .background(Theme.background)
    }
}
