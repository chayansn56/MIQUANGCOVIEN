# Mì Quảng Cô Viên | Official Brand Website
**Website Repository & Production Build for `miquangcovien.com`**

---

## 1. Corporate Identity & Registered Information

* **Legal Enterprise Name (EN):** CO VIEN MI QUANG FOOD TRADING COMPANY LIMITED
* **Legal Enterprise Name (VN):** CÔNG TY TNHH THƯƠNG MẠI THỰC PHẨM MÌ QUẢNG CÔ VIÊN
* **Tax Code / Enterprise ID:** `0319275224`
* **Official Domain:** `miquangcovien.com`
* **Inquiry Email:** `contact@miquangcovien.com`
* **Hotline:** `+84 906 404 595`

### Executive Leadership & Ownership
* **Founder:** PRAN NATH SONI
* **Director & Brand Soul:** VO THI VIEN (Cô Viên)
* **Chief Executive Officer (CEO):** CHAYAN SONI

---

## 2. The 3 Official Establishments

1. **Corporate Headquarters & Culinary Hub:**
   * **Address:** 38 Đường 9A, Khu phố Phước Thiện, Long Bình Ward, Thu Duc City, HCMC
   * **Hours:** 06:00 AM – 09:30 PM (Daily)
2. **Nguyễn Xiển Culinary Hub:**
   * **Address:** 532 – 542 Nguyễn Xiển, Long Thạnh Mỹ / Long Bình Ward, Thu Duc City, HCMC
   * **Hours:** 06:00 AM – 10:00 PM (Daily)
   * **Phone:** `+84 906 404 595` / `+84 909 622 967`
3. **Nguyễn Quý Đức Hub:**
   * **Address:** 45 Nguyễn Quý Đức, An Phú Ward, Thu Duc City, HCMC
   * **Hours:** 06:30 AM – 09:30 PM (Daily)

---

## 3. How to Preview the Site Locally

You can open the website instantly on your Mac by running:

```bash
open /Users/chayansoni/.gemini/antigravity/scratch/miquangcovien-website/index.html
```
or by double-clicking `index.html` in Finder.

---

## 4. How to Connect `miquangcovien.com` on GoDaddy (Get It Live Free)

### Option A: Cloudflare Pages (Recommended - 100% Free, Fastest)
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) -> **Workers & Pages** -> **Create application** -> **Pages**.
2. Upload this folder (`miquangcovien-website`) directly or connect via GitHub.
3. Click **Custom Domains** -> Enter `miquangcovien.com`.
4. In your **GoDaddy DNS Management**, add:
   * **CNAME Record**: Name: `www`, Value: `<your-project>.pages.dev`
   * **A Record** (or Cloudflare Nameservers): Point root `@` to Cloudflare.

### Option B: Vercel (1-Click Free Hosting)
1. In this directory, run `npx vercel` (or drag-and-drop the folder on [vercel.com](https://vercel.com)).
2. Go to Project Settings -> **Domains** -> Add `miquangcovien.com` and `www.miquangcovien.com`.
3. In GoDaddy DNS, set:
   * **A Record**: Name: `@`, Value: `76.76.21.21`
   * **CNAME Record**: Name: `www`, Value: `cname.vercel-dns.com`

---
*Created for CO VIEN MI QUANG FOOD TRADING COMPANY LIMITED.*
