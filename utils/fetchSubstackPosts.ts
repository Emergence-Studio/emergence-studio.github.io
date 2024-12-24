export interface SubstackPost {
  title: string;
  description: string;
  url: string;
  date: string;
}

export async function fetchSubstackPosts(): Promise<SubstackPost[]> {
  try {
    const response = await fetch('/api/substack-posts');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }
    return data;
  } catch (error) {
    console.error('Error fetching Substack posts:', error);
    throw error; // Re-throw the error to be handled by the component
  }
}

