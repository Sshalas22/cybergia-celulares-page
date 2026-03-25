exports.handler = async function(event, context) {
  const API_KEY  = 'AIzaSyApoubvbCIqAvhkY4DEiHso6H3NWFQmM24';
  const PLACE_ID = '0x85c3411f2f4a978b:0xee93f50914b22bf2';

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=rating,userRatingCount,reviews&languageCode=es&key=${API_KEY}`,
      { headers: { 'X-Goog-FieldMask': 'rating,userRatingCount,reviews' } }
    );
    const data = await res.json();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    };
  } catch(e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message })
    };
  }
};
