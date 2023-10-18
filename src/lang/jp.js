/**
 * jp translate
 * @type Object
 */
/* eslint camelcase: 0 */
const jp = {
  btn: {
    about: 'について',
    back: '戻る',
    cancel: 'キャンセル',
    clear: 'クリア',
    copy: 'コピー',
    cut: '切り取り',
    delete: '削除',
    edit: '編集',
    forward: '転送',
    folder: '新規フォルダ',
    file: '新規ファイル',
    fullScreen: '全画面表示',
    grid: 'グリッド',
    paste: '貼り付け',
    refresh: '更新',
    submit: '送信',
    table: 'テーブル',
    upload: 'アップロード',
    uploadSelect: 'ファイルを選択',
    hidden: '非表示ファイル',
  },
  clipboard: {
    actionType: 'タイプ',
    copy: 'コピー',
    cut: '切り取り',
    none: '選択なし',
    title: 'クリップボード',
  },
  contextMenu: {
    copy: 'コピー',
    cut: '切り取り',
    delete: '削除',
    download: 'ダウンロード',
    info: '選択中:',
    open: '開く',
    paste: '貼り付け',
    properties: 'プロパティ',
    rename: '名前変更',
    select: '選択',
    view: '表示',
    zip: '圧縮',
    unzip: '展開',
    edit: '編集',
    audioPlay: '再生',
    videoPlay: '再生',
  },
  info: {
    directories: 'フォルダ:',
    files: 'ファイル:',
    selected: '選択中:',
    selectedSize: 'ファイルサイズ:',
    size: 'ファイルサイズ:',
  },
  manager: {
    table: {
      date: '日付',
      folder: 'フォルダ',
      name: '名前',
      size: 'サイズ',
      type: 'タイプ',
    },
  },
  modal: {
    about: {
      developer: '開発者',
      name: 'Laravel ファイルマネージャー',
      title: 'About',
      version: 'バージョン',
    },
    delete: {
      noSelected: '選択されていません。',
      title: '削除',
    },
    newFile: {
      fieldName: 'ファイル名',
      fieldFeedback: 'ファイルは既に存在します。',
      title: '新規ファイル作成',
    },
    newFolder: {
      fieldName: 'フォルダ名',
      fieldFeedback: 'フォルダは既に存在します。',
      title: '新規フォルダ作成',
    },
    preview: {
      title: 'プレビュー',
    },
    properties: {
      disk: 'ディスク',
      modified: '変更日時',
      name: '名前',
      path: 'パス',
      size: 'サイズ',
      title: 'プロパティ',
      type: 'タイプ',
      url: 'URL',
      access: 'アクセス',
      access_0: 'アクセス不可',
      access_1: '読み取りのみ',
      access_2: '読み書き可能',
    },
    rename: {
      directoryExist: 'ディレクトリは既に存在します。',
      fieldName: '新しい名前を入力',
      fieldFeedback: '無効な名前',
      fileExist: 'ファイルは既に存在します。',
      title: '名前変更',
    },
    status: {
      noErrors: 'エラーなし。',
      title: 'ステータス',
    },
    upload: {
      ifExist: 'ファイルが存在する場合:',
      noSelected: 'ファイルが選択されていません。',
      overwrite: '上書き。',
      selected: '選択されたファイル:',
      size: 'サイズ:',
      skip: 'スキップ',
      title: 'ファイルをアップロード',
    },
    editor: {
      title: 'エディタ',
    },
    audioPlayer: {
      title: 'オーディオプレーヤー',
    },
    videoPlayer: {
      title: 'ビデオプレーヤー',
    },
    zip: {
      title: 'アーカイブを作成',
      fieldName: 'アーカイブ名',
      fieldFeedback: 'アーカイブが存在します。',
    },
    unzip: {
      title: 'アーカイブを解凍',
      fieldName: 'フォルダ名',
      fieldRadioName: '解凍先:',
      fieldRadio1: '現在のフォルダに解凍',
      fieldRadio2: '新しいフォルダに解凍',
      fieldFeedback: 'フォルダが存在します。',
      warning: '同じ名前のファイルは上書きされます。',
    },
    cropper: {
      title: 'クロッピング',
      apply: '適用',
      reset: 'リセット',
      save: '保存',
    },
  },
  notifications: {
    cutToClipboard: 'クリップボードにカットされました。',
    copyToClipboard: 'クリップボードにコピーされました。',
  },
  response: {
    noConfig: '設定が見つかりません。',
    notFound: '見つかりません。',
    diskNotFound: 'ディスクが見つかりません。',
    pathNotFound: 'パスが見つかりません。',
    diskSelected: 'ディスクが選択されました。',
    // files
    fileExist: 'ファイルはすでに存在します。',
    fileCreated: 'ファイルが作成されました。',
    fileUpdated: 'ファイルが更新されました。',
    fileNotFound: 'ファイルが見つかりません。',
    // directories
    dirExist: 'ディレクトリはすでに存在します。',
    dirCreated: 'ディレクトリが作成されました。',
    dirNotFound: 'ディレクトリが見つかりません。',
    // actions
    uploaded: 'すべてのファイルがアップロードされました。',
    notAllUploaded: '一部のファイルがアップロードされませんでした。',
    delNotFound: '一部のアイテムが見つかりませんでした。',
    deleted: '削除されました。',
    renamed: '名前が変更されました。',
    copied: 'コピーが正常に完了しました。',
    zipError: 'アーカイブの作成中にエラーが発生しました。',
    aclError: 'アクセスが拒否されました。',
  },
};

export default jp;