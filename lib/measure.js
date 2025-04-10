

/**
 * Performs a retrieval for a website and returns measurement results.
 *
 * @param {{ host: string; port: number; protocol: string; }} node
 * @param {string} txId
 * @returns { Promise<{ retrievalSucceeded: boolean, estimatedSpeedMbps:string,downloadTimeSeconds:string, url:string  }> }
 */
export const measure = async (site, ip) => {
  const startTime = performance.now();
  try {
    const response = await fetch(site, { method: "GET", cache: "no-store" }); // Request to avoid cache
    const data = await response.blob(); // Download as a blob
    
    const endTime = performance.now(); // End time
    const duration = (endTime - startTime) / 1000; // Time in seconds
    
    const dataSize = data.size; // Size of data in bytes
    const bandwidth = (dataSize / duration / 1024 / 1024).toFixed(2); // Speed ​​in Mbps

    console.log(`URL: ${site}`);
    console.log(`File size: ${(dataSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Download time: ${duration.toFixed(2)} s`);
    console.log(`Estimated speed: ${bandwidth} Mbps`);


    return { retrievalSucceeded: true, estimatedSpeedMbps: bandwidth, downloadTimeSeconds:duration.toFixed(2), url:site, ip: ip };
  } catch (err) {
    console.error(`Failed to measuring the site ${site}`)
    return { retrievalSucceeded: false }
  }
}
