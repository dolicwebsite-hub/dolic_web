export function isMaintenanceMode() {
  const value = process.env.MAINTENANCE_MODE?.toLowerCase();

  return value === "1" || value === "true" || value === "yes";
}
