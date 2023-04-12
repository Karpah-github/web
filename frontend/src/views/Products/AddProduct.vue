<!-- eslint-disable no-undef -->
<!-- eslint-disable no-undef -->
<template>
  <div class="px-8 py-10">
    <div class="flex gap-3 items-center">
      <button @click.prevent="router.go(-1)" class="btn-secondary p-0.5">
        <img src="../../assets/icons/arrow-left.svg" alt="" />
      </button>
      <h5 class="header5">Add product</h5>
    </div>
    <ProductUploadNav :page="page" @update:page="updatePage" />
    <ProductDetailsForm
      v-show="page === 'product-details'"
      v-model:product-name="productInfo.name"
      v-model:product-description="productInfo.description"
      v-model:product-category="productInfo.category"
      v-model:product-quantity="productInfo.quantity"
      v-model:product-tag="tag"
      v-model:product-reviewStatus="productInfo.reviewStatus"
      v-model:product-bust="productInfo.measurement.bust"
      v-model:product-hip="productInfo.measurement.hip"
      v-model:product-waist="productInfo.measurement.waist"
      v-model:product-height="productInfo.measurement.height"
      :add-tag="addTag"
      :remove-tag="removeTag"
      :add-highlight="addHighlight"
      :remove-highlight="removeHighlight"
      :productTags="productInfo.tags"
      :productHighlights="productInfo.highlights"
      :add-highlight-title="addHighlightTitle"
      :add-highlight-details="addHighlightDetails"
      :page="page"
      @update:page="updatePage"
    />
    <ProductPricingForm
      v-show="page === 'pricing'"
      v-model:product-price="productInfo.price"
      v-model:product-compare-price="productInfo.comparePrice"
      :page="page"
      @update:page="updatePage"
    />
    <ProductShippingForm
      v-show="page === 'shipping'"
      v-model:product-height="productInfo.height"
      v-model:product-weight="productInfo.weight"
      v-model:product-delivery-period="productInfo.deliveryPeriod"
      :page="page"
      @update:page="updatePage"
    />
    <ProductImageUpload
      v-show="page === 'upload-image'"
      v-model:product-images="productInfo"
      v-model:product-image="productInfo.images"
      :page="page"
      @update:page="updatePage"
    />
  </div>
</template>

<script setup lang="ts">
import { ProductInfo } from "../../composables/products/productDetails";
import ProductUploadNav from "@/components/products/AddProducts/ProductUploadNav.vue";
import { ref } from "vue";
import type { Ref } from "vue";
import { useRouter } from "vue-router";
import ProductDetailsForm from "@/components/products/AddProducts/ProductDetailsForm.vue";
import ProductPricingForm from "@/components/products/AddProducts/ProductPricingForm.vue";
import ProductShippingForm from "@/components/products/AddProducts/ProductShippingForm.vue";
import ProductImageUpload from "@/components/products/AddProducts/ProductImageUpload.vue";

const router = useRouter();
const page = ref("upload-image");
const updatePage = (view: string) => {
  page.value = view;
};

const productInfo: Ref<ProductInfo> = ref({
  name: "",
  description: "",
  category: "",
  quantity: 0,
  tags: [],
  reviewStatus: false,
  measurement: {
    bust: 0,
    height: 0,
    hip: 0,
    waist: 0,
  },
  highlights: [],
  price: 0,
  comparePrice: 0,
  height: 0,
  weight: 0,
  deliveryPeriod: "",
  images: [],
});
const tag = ref("");
const addTag = () => {
  productInfo.value.tags.push(tag.value);
  tag.value = "";
};
const removeTag = (index: number) => {
  productInfo.value.tags.splice(index, 1);
};
const addHighlight = () => {
  const highlight = ref({
    title: "",
    details: "",
  });
  const newp = productInfo.value.highlights;
  newp.push(highlight);
  productInfo.value.highlights = newp;
};
const removeHighlight = (index: number) => {
  productInfo.value.highlights.splice(index, 1);
};
const addHighlightTitle = (highlight: any) => {
  productInfo.value.highlights = productInfo.value.highlights.map(
    (h, index) => {
      if (index === highlight.id) {
        h.value.title = highlight.title;
      }
      return h;
    }
  );
};
const addHighlightDetails = (highlight: any) => {
  productInfo.value.highlights = productInfo.value.highlights.map(
    (h, index) => {
      if (index === highlight.id) {
        h.value.details = highlight.details;
      }
      return h;
    }
  );
};
</script>
<style lang="scss"></style>
