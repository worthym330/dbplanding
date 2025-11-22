## DayBreakPass Landing

### Maintenance Mode

To put the site into maintenance mode (show a maintenance message on all pages):

1. Create or edit `.env.local` in the project root.
2. Set `MAINTENANCE_MODE=true`.
3. Restart the Next.js dev server / redeploy.

When enabled, normal layout components are replaced by a centered maintenance notice. Search engines are instructed not to index (`noindex, nofollow`).

To disable maintenance mode, remove the variable or set `MAINTENANCE_MODE=false` and restart.

### Quick Commands (PowerShell)
```powershell
echo "MAINTENANCE_MODE=true" > .env.local    # enable
echo "MAINTENANCE_MODE=false" > .env.local   # disable
```

### Deployment Note
Ensure your hosting platform propagates `.env` changes (e.g. update environment variables in the dashboard) before expecting the maintenance page to display.

