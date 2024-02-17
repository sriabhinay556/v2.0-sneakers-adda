// pages/api/proxy.js or a similar file
export default async function handler(req, res) {
    const { sneakerId } = req.query; // Assuming you pass sneakerId as a query parameter
    
    try {
      const response = await fetch(`https://www.goat.com/web-api/v1/product_variants/buy_bar_data?productTemplateId=${sneakerId}&countryCode=US`, { cache: 'no-store' });
      if (!response.ok) throw new Error('Failed to fetch sneaker data');
  
      const sneakerData = await response.json();
  
      // Here is where you set the header on the response object `res`, not `sneakerData`
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(sneakerData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
  