
function threeSum(arr, target) {
// write your code here
	arr.sort((a,b) =>a-b);
	var ans =arr[0] + arr[1] + arr[2];
	for(var i= 0;i<arr.length;i++)
		{
			let start = i+1;
			let end = arr.length-1;

			while(start < end)
				{
					let sum = arr[i] + arr[start] + arr[end];
					if(sum > target)
					{
						end--;
					}
					else{
						start++;
					}
					if(Math.abs(target-sum) < Math.abs(target-ans))
					{
						ans = sum;
					}
				}
		}
	return ans;
  
}

module.exports = threeSum;