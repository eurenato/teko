import axios from "axios";
export function isThereMore(trashData) {
    let x = (trashData[4]) || 0
    let y = (trashData[5]) || 0
    if (x > y) {
      return "Foram coletados " + (x - y) + "kgs a menos que mês passado";
    } else {
      return "Foram coletados " + (y - x) + "kgs a menos que mês passado";
    }
  }
  
export async function getTrash() {
    const mockData = [
        { date: '2025-05-01', weight: '2.5,3.2,4.1' },
        { date: '2025-05-15', weight: '1.8,2.7' },
        { date: '2025-06-03', weight: '5.0,3.3' },
        { date: '2025-06-20', weight: '2.2,4.5,1.7' }
    ];

    const monthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

    const groupedData = mockData.reduce((acc, item) => {
        if (item.weight !== null) {
            const date = new Date(item.date);
            const month = date.getMonth();
            const weights = item.weight.split(',').map(Number);
            const totalWeight = weights.reduce((a, b) => a + b, 0);
            acc[month] = (acc[month] || 0) + totalWeight;
        }
        return acc;
    }, {});

    return groupedData;
}