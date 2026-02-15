export function getHumanizedDateTime() {
    const now = new Date();

    // Random minutes within last 24 hours (0 - 1440)
    const randomMinutesAgo = Math.floor(Math.random() * 1440);

    const randomDate = new Date(
        now.getTime() - randomMinutesAgo * 60 * 1000
    );

    const month = String(randomDate.getMonth() + 1).padStart(2, "0");
    const day = String(randomDate.getDate()).padStart(2, "0");
    const year = randomDate.getFullYear();

    let hours = randomDate.getHours();
    const minutes = String(randomDate.getMinutes()).padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${month}-${day}-${year} | ${hours}:${minutes} ${ampm}`;
}