(async () => {
  const { default: fetch } = await import('node-fetch');
  global.fetch = fetch;

  const { createClient } = require('@supabase/supabase-js');

// Replace these values with your actual Supabase URL and Key
const SUPABASE_URL = 'https://anzvzmrmxzkbdvtvroga.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuenZ6bXJteHprYmR2dHZyb2dhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5MDYxNDgsImV4cCI6MjAyODQ4MjE0OH0.1cF9dkZwhaxN7iPkhu6ZSqeL_WknWP7gA8p1MKo_Sxc';

  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  async function testConnection() {
    let { data, error } = await supabase.from('your-table-name').select('*').limit(1);
    if (error) {
      console.error('Error connecting to Supabase:', error);
      return;
    }
    console.log('Success! Connected to Supabase:', data);
  }

  testConnection();
})();