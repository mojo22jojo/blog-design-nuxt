export function useSearchNameGame(data: any) {
  const searchProviderName = ref("");
  console.log(searchProviderName);

  const filteredData = computed(() => {
    return data.value.filter((item: string) => {
      return item.name
        .toLowerCase()
        .includes(searchProviderName.value.toLowerCase());
    });
  });
  return {
    searchProviderName,
    filteredData,
  };
}
