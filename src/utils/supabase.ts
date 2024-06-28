import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient('https://keknhalxjghhpzjfnpuv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtla25oYWx4amdoaHB6amZucHV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxNDc3OTksImV4cCI6MjAzMzcyMzc5OX0.amGkEqbUu02gximrAOffHT1W5V-j2jgqbNQZz1uOtc0', 
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false
    }
  }
)