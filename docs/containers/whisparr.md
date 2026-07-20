---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20622" onclick="CopyToClipboard('tag20622');return false;" class="tag-decoration">v2</div><div id="tag4870" onclick="CopyToClipboard('tag4870');return false;" class="tag-decoration">v2-b5a3836</div><div id="tag22881" onclick="CopyToClipboard('tag22881');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag17834" onclick="CopyToClipboard('tag17834');return false;" class="tag-decoration">v2-v2</div><div id="tag27753" onclick="CopyToClipboard('tag27753');return false;" class="tag-decoration">v2-v2.2</div><div id="tag15762" onclick="CopyToClipboard('tag15762');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b5a3836c59570640cc17371cd28169ea305948a7" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681497871" target="_blank">2026-07-19 09:23:37</a></td></tr>
<tr><td><div id="tag29659" onclick="CopyToClipboard('tag29659');return false;" class="tag-decoration">v2-develop</div><div id="tag10692" onclick="CopyToClipboard('tag10692');return false;" class="tag-decoration">v2-develop-a4ad935</div><div id="tag6588" onclick="CopyToClipboard('tag6588');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag31909" onclick="CopyToClipboard('tag31909');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag19481" onclick="CopyToClipboard('tag19481');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag10446" onclick="CopyToClipboard('tag10446');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a4ad93559ed1c47634e2271a61a1adb57bd3ecdc" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681491856" target="_blank">2026-07-19 09:23:26</a></td></tr>
<tr><td><div id="tag20786" onclick="CopyToClipboard('tag20786');return false;" class="tag-decoration">v3</div><div id="tag15375" onclick="CopyToClipboard('tag15375');return false;" class="tag-decoration">v3-4cd7131</div><div id="tag743" onclick="CopyToClipboard('tag743');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag4435" onclick="CopyToClipboard('tag4435');return false;" class="tag-decoration">v3-v3</div><div id="tag6791" onclick="CopyToClipboard('tag6791');return false;" class="tag-decoration">v3-v3.3</div><div id="tag14225" onclick="CopyToClipboard('tag14225');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/4cd7131e55cf28a24f0da07c9b226a2c176adafd" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681516891" target="_blank">2026-07-19 09:24:13</a></td></tr>
<tr><td><div id="tag23751" onclick="CopyToClipboard('tag23751');return false;" class="tag-decoration">v3-develop</div><div id="tag207" onclick="CopyToClipboard('tag207');return false;" class="tag-decoration">v3-develop-4c38968</div><div id="tag15794" onclick="CopyToClipboard('tag15794');return false;" class="tag-decoration">v3-develop-3.3.5-develop.856</div><div id="tag26370" onclick="CopyToClipboard('tag26370');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag10396" onclick="CopyToClipboard('tag10396');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag26322" onclick="CopyToClipboard('tag26322');return false;" class="tag-decoration">v3-develop-v3.3.5</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/4c38968d8736dd86b6aaa463ce997f50ed37c885" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29771713567" target="_blank">2026-07-20 19:22:22</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
