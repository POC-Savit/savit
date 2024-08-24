export type ItemOfList<L> = L extends Array<infer T> | ReadonlyArray<infer T>
  ? T
  : never

type GrouppedList<
  L extends Array<any> | ReadonlyArray<any>,
  GT extends string,
> = {
  groupType: GT
  list: ItemOfList<L>[]
  originStartIndex: number
}

/**
 * 순서를 유지하며 그룹을 나누는 함수
 */
export function sequenceGroupPartition<
  L extends Array<any> | ReadonlyArray<any>,
  GT extends string,
>(
  list: L,
  defineGroupType: (item: ItemOfList<L>) => GT
): GrouppedList<L, GT>[] {
  const result = list.reduce((acc, item, index) => {
    const curGroupType = defineGroupType(item)
    const { prevGroupList, groupPartitionList } = acc

    if (!prevGroupList && index === 0) {
      const groupList = {
        groupType: curGroupType,
        list: [item],
        originStartIndex: 0,
      }

      const groupPartitionList = [groupList]

      return {
        prevGroupList: groupList,
        groupPartitionList,
      }
    }

    const {
      groupType: prevGroupType,
      list: prevList,
      originStartIndex: prevOriginStartIndex,
    } = prevGroupList

    if (prevGroupType === curGroupType) {
      prevList.push(item)

      return acc
    }

    const groupList = {
      groupType: curGroupType,
      list: [item],
      originStartIndex: prevOriginStartIndex + prevList.length,
    }

    acc.prevGroupList = groupList
    groupPartitionList.push(groupList)

    return acc
  }, {})

  return result.groupPartitionList
}
