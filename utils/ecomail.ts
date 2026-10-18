type EcomailSubscriber = {
  email: string;
  name: string;
  source: string;
};

export async function subscribeToEcomail(listId: number, subscriber: EcomailSubscriber) {
  const apiKey = process.env.ECOMAIL_API_KEY;

  if (!apiKey) {
    console.warn(`Missing ECOMAIL_API_KEY - skipped Ecomail subscription for list ${listId}.`);
    return;
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
    throw new Error(`Ecomail subscription failed (${response.status}): ${await response.text()}`);
  }
}
