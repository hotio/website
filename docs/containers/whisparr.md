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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17819" onclick="CopyToClipboard('tag17819');return false;" class="tag-decoration">v2</div><div id="tag15803" onclick="CopyToClipboard('tag15803');return false;" class="tag-decoration">v2-f481720</div><div id="tag16914" onclick="CopyToClipboard('tag16914');return false;" class="tag-decoration">v2-2.0.0.2151</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f481720c60a6bf799c4e8fc0b1aff90215a52bb4" target="_blank">Version update: 2.0.0.2142 => 2.0.0.2151</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21202910964" target="_blank">2026-01-21 08:44:26</a></td></tr>
<tr><td><div id="tag20845" onclick="CopyToClipboard('tag20845');return false;" class="tag-decoration">v3</div><div id="tag16645" onclick="CopyToClipboard('tag16645');return false;" class="tag-decoration">v3-a246737</div><div id="tag32148" onclick="CopyToClipboard('tag32148');return false;" class="tag-decoration">v3-3.2.1-release.65</div><div id="tag30581" onclick="CopyToClipboard('tag30581');return false;" class="tag-decoration">v3-v3</div><div id="tag30823" onclick="CopyToClipboard('tag30823');return false;" class="tag-decoration">v3-v3.2</div><div id="tag19367" onclick="CopyToClipboard('tag19367');return false;" class="tag-decoration">v3-v3.2.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a2467373ab61d187c2f94d41a5043b5dc9ca851f" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21200285068" target="_blank">2026-01-21 06:58:37</a></td></tr>
<tr><td><div id="tag2118" onclick="CopyToClipboard('tag2118');return false;" class="tag-decoration">v3-develop</div><div id="tag17922" onclick="CopyToClipboard('tag17922');return false;" class="tag-decoration">v3-develop-265cf10</div><div id="tag3918" onclick="CopyToClipboard('tag3918');return false;" class="tag-decoration">v3-develop-3.2.1-develop.74</div><div id="tag18355" onclick="CopyToClipboard('tag18355');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag30040" onclick="CopyToClipboard('tag30040');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag24530" onclick="CopyToClipboard('tag24530');return false;" class="tag-decoration">v3-develop-v3.2.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/265cf101595b4ca943b8254a82bf75e6236b4e22" target="_blank">Version update: 3.2.1-develop.69 => 3.2.1-develop.74</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21227218851" target="_blank">2026-01-21 21:59:57</a></td></tr>
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
