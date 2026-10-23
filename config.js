/* Uygulama yapılandırması.
 *
 * İKİ MOD:
 *  - Aşağıdaki iki değer BOŞ ise: "Yerel prototip modu" (veriler yalnızca bu tarayıcıda, localStorage'da).
 *  - İkisi de DOLU ise: "Ortak mod" (Supabase veritabanı + giriş; herkes görüntüler, yetkililer düzenler).
 *
 * Değerleri Supabase paneli > Project Settings > API sayfasından alın:
 *   SUPABASE_URL      -> "Project URL"
 *   SUPABASE_ANON_KEY -> "anon" / "publishable" anahtar
 *
 * ÖNEMLİ GÜVENLİK NOTU
 *  - anon/publishable anahtar tarayıcıya konulmak üzere tasarlanmıştır; yetkisiz yazmayı
 *    veritabanındaki satır düzeyi güvenlik (RLS) politikaları engeller (supabase/schema.sql).
 *  - "service_role" / "secret" anahtarını ASLA bu dosyaya veya herhangi bir istemci dosyasına koymayın.
 */
window.APP_CONFIG = {
  SUPABASE_URL: 'https://ueduafeymzjyjjwmaajs.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlZHVhZmV5bXpqeWpqd21hYWpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI3Nzg1NjcsImV4cCI6MjEwODM1NDU2N30.Kx-yJlx_H88cK8-i9SPKeFUxcADVavV-yVWI36gHIKM',
  // Herkese açık site adresi (davet mesajlarında kullanılır)
  PUBLIC_URL: 'https://receposkarci-ai.github.io/kuft/',
};
