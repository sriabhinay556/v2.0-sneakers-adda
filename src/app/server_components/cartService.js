import { supabase } from "@/lib/supabase";
import { data } from "autoprefixer";

export const fetchUserData = async (username) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('userItemCount, userItems')
      .eq('username', username)
      .single(); // Use single to fetch a single row

    if (error) {
      throw error;
    }
    console.log('fetched data from db: ', data);
    return data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

export const updateUserData = async (username, itemCount, itemsData) => {
  try {
    const { error } = await supabase
      .from('users')
      .update({
        userItemCount: itemCount,
        userItems: itemsData,
      })
      .eq('username', username);

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error updating user data:', error);
  }
};
