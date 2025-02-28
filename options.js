document.addEventListener('DOMContentLoaded', () => {
  const settings = ['hide_related_searches', 'hide_web_tags', 'hide_ads', 'highlight_ads', 'make_ads_transparent', 'hide_lock_icon', 'hide_also_try', 'hide_microsoft_cashback', 'hide_mobile', 'hide_promoted_by_microsoft_results', 'hide_feedback_prompt'];
  const optionsContainer = document.getElementById('options');
  const info = document.getElementById('save-info')

  chrome.storage.sync.get(settings, (result) => {
    settings.forEach(setting => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = setting;
      checkbox.checked = result[setting] || false;

      const label = document.createElement('label');
      label.htmlFor = setting;
      label.textContent = setting.replace(/_/g, ' ');

      label.appendChild(checkbox);

      optionsContainer.appendChild(label);
    });
  });

  document.getElementById('save').addEventListener('click', () => {
    const newSettings = {};
    settings.forEach(setting => {
      newSettings[setting] = document.getElementById(setting).checked;
    });

    chrome.storage.sync.set(newSettings, () => {
      info.innerText = 'Options saved! Reload for changes to take effect'
    });
  });
});