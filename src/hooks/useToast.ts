import Toast from "@/types/Toast";
import { reactive, ref } from "vue";
import { debounce } from "lodash";

const settings = {
  timeout: 3000,
};

export const state: Toast = reactive({
  text: "",
  show: false,
});

export const toasts = ref<Toast[]>([]);

export default function useToast(): {
  setToast: (data: string) => void;
  insertToast: (data: Toast) => void;
  hideToast: () => void;
  showToast: (data?: string) => void;
  showHideToast: (data?: string) => void;
  toggleToast: () => void;
} {
  let timeout: number;

  const setToast = (data: string) => {
    state.text = data;
  };

  const insertToast = (toast: Toast) => {
    const buff = [toast, ...toasts.value];
    toasts.value = buff;
  };

  const debounced = debounce(
    (data: string) => {
      showToast(data);
      timeout = setTimeout(() => {
        hideToast();
      }, settings.timeout);
    },
    4000,
    { leading: true, trailing: false }
  );

  const hideToast = () => {
    state.show = false;
    state.text = "";
    clearTimeout(timeout);
  };
  const showToast = (data = "") => {
    if (data) state.text = data;
    state.show = true;
  };
  const toggleToast = () => {
    state.show = !state.show;
  };
  const showHideToast = (data = "") => {
    if (data) state.text = data;
    debounced(data);
  };

  return {
    setToast,
    insertToast,
    hideToast,
    showToast,
    showHideToast,
    toggleToast,
  };
}
