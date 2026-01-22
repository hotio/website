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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25274" onclick="CopyToClipboard('tag25274');return false;" class="tag-decoration">v2</div><div id="tag22549" onclick="CopyToClipboard('tag22549');return false;" class="tag-decoration">v2-ff2ab73</div><div id="tag3004" onclick="CopyToClipboard('tag3004');return false;" class="tag-decoration">v2-2.0.0.2151</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ff2ab7361e0eebb02eafd05f04f9390cb7d6825a" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21237961294" target="_blank">2026-01-22 06:03:45</a></td></tr>
<tr><td><div id="tag22547" onclick="CopyToClipboard('tag22547');return false;" class="tag-decoration">v3</div><div id="tag18865" onclick="CopyToClipboard('tag18865');return false;" class="tag-decoration">v3-a246737</div><div id="tag26621" onclick="CopyToClipboard('tag26621');return false;" class="tag-decoration">v3-3.2.1-release.65</div><div id="tag14426" onclick="CopyToClipboard('tag14426');return false;" class="tag-decoration">v3-v3</div><div id="tag5297" onclick="CopyToClipboard('tag5297');return false;" class="tag-decoration">v3-v3.2</div><div id="tag21021" onclick="CopyToClipboard('tag21021');return false;" class="tag-decoration">v3-v3.2.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a2467373ab61d187c2f94d41a5043b5dc9ca851f" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21200285068" target="_blank">2026-01-21 06:58:37</a></td></tr>
<tr><td><div id="tag5999" onclick="CopyToClipboard('tag5999');return false;" class="tag-decoration">v3-develop</div><div id="tag3498" onclick="CopyToClipboard('tag3498');return false;" class="tag-decoration">v3-develop-265cf10</div><div id="tag14516" onclick="CopyToClipboard('tag14516');return false;" class="tag-decoration">v3-develop-3.2.1-develop.74</div><div id="tag6469" onclick="CopyToClipboard('tag6469');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag14869" onclick="CopyToClipboard('tag14869');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag27570" onclick="CopyToClipboard('tag27570');return false;" class="tag-decoration">v3-develop-v3.2.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/265cf101595b4ca943b8254a82bf75e6236b4e22" target="_blank">Version update: 3.2.1-develop.69 => 3.2.1-develop.74</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21227218851" target="_blank">2026-01-21 21:59:57</a></td></tr>
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
