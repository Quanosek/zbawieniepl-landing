type EcomailSubscriber = {
  email: string;
  name: string;
};

export async function subscribeToEcomail(subscriber: EcomailSubscriber) {
  const apiKey = process.env.ECOMAIL_API_KEY;
  const listId = process.env.ECOMAIL_BOSKI_PLAN_LIST_ID;

  if (!apiKey || !listId) {
    throw new Error("Missing Ecomail API configuration");
  }

  const response = await fetch(`https://api2.ecomailapp.cz/lists/${listId}/subscribe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      key: apiKey,
    },
    body: JSON.stringify({
      subscriber_data: subscriber,
      trigger_autoresponders: true,
      update_existing: true,
      resubscribe: true,
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    console.error("Ecomail subscription failed with status:", response.status);
    throw new Error("Ecomail subscription failed");
  }
}
