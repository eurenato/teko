import axios from "axios";
export function isThereMore(trashData) {
    let x = (trashData[4]) || 0
    let y = (trashData[5]) || 0
    if (x > y) {
      return "Foram coletados " + (x - y) + "kgs a mais que mês passado";
    } else {
      return "Foram coletados " + (y - x) + "kgs a menos que mês passado";
    }
  }
  
export async function getTrash(){
    axios.get('http://18.222.85.156:8000/trashLog/')
    .then(response => {
      const data = response.data;
      const monthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
      const groupedData = data.reduce((acc, item) => {
        if (item.weight !== null) {
          const date = new Date(item.date);
          const month = date.getMonth();
          const weights = item.weight.split(',').map(Number);
          const totalWeight = weights.reduce((a, b) => a + b, 0);
          acc[month] = (acc[month] || 0) + totalWeight;
        }
        return acc;
      }, {});
}
)
}