#!/bin/bash
# ══════════════════════════════════════════════
# Handayani Kemuning — Deploy Script
# Isi dulu variabel di bawah sebelum dipakai.
# ══════════════════════════════════════════════

set -e

# ─── KONFIGURASI: ganti sesuai data hosting kamu ───
SSH_USER="user_cpanel"                  # username SSH/cPanel
SSH_HOST="handayanikemuning.com"        # domain atau IP server
SSH_PORT="22"                           # port SSH (cek di cPanel, kadang bukan 22)
REMOTE_DIR="~/public_html"              # folder root hosting (biasanya public_html)
LOCAL_DIR="$(dirname "$0")"             # folder project ini (otomatis)

echo "🚀 Deploy Handayani Kemuning ke $SSH_HOST ..."

# ─── Sinkronkan file via rsync over SSH ───
# -a  : archive mode (preserve permission, dll)
# -v  : verbose
# -z  : compress saat transfer
# --delete : hapus file di server yang sudah tidak ada di lokal (hati-hati!)
rsync -avz --delete \
  --exclude ".git/" \
  --exclude ".DS_Store" \
  --exclude "deploy.sh" \
  --exclude "PROGRESS.md" \
  -e "ssh -p $SSH_PORT" \
  "$LOCAL_DIR"/ "$SSH_USER@$SSH_HOST:$REMOTE_DIR"

echo "✅ Deploy selesai. Cek https://$SSH_HOST"

# ══════════════════════════════════════════════
# ALTERNATIF: kalau hosting cuma support FTP (bukan SSH)
# install lftp dulu (mac: brew install lftp | ubuntu: apt install lftp)
# lalu uncomment & isi blok di bawah, comment blok rsync di atas
# ══════════════════════════════════════════════
#
# FTP_USER="user_ftp"
# FTP_PASS="password_ftp"
# FTP_HOST="ftp.handayanikemuning.com"
# FTP_DIR="/public_html"
#
# lftp -u "$FTP_USER","$FTP_PASS" "$FTP_HOST" <<EOF
# mirror -R --delete --exclude .git/ --exclude deploy.sh --exclude PROGRESS.md "$LOCAL_DIR" "$FTP_DIR"
# bye
# EOF
