export const dateFormat = (timestamp: string | number | Date) => {
    if (!timestamp) return '';
  
    const date = new Date(timestamp);
  
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' }); 
    const day = date.getDate(); 
    const time = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true, 
    });
  
    return `${month} ${day}, ${year} ${time}`;
  };
  