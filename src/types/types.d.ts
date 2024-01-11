interface Window {
	// gtag が存在する場合、その型定義を行う
	gtag?: (type: string, arg1: string, arg2?: Record<string, any>) => void;
}
