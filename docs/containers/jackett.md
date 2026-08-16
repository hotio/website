---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag238" onclick="CopyToClipboard('tag238');return false;" class="tag-decoration">release</div><div id="tag12962" onclick="CopyToClipboard('tag12962');return false;" class="tag-decoration">release-e6142fe</div><div id="tag20630" onclick="CopyToClipboard('tag20630');return false;" class="tag-decoration">release-0.24.2414</div><div id="tag9489" onclick="CopyToClipboard('tag9489');return false;" class="tag-decoration">release-v0</div><div id="tag16449" onclick="CopyToClipboard('tag16449');return false;" class="tag-decoration">release-v0.24</div><div id="tag4963" onclick="CopyToClipboard('tag4963');return false;" class="tag-decoration">release-v0.24.2414</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/e6142fea38bf6e389e8559f88a133295eb49d4b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/31972778031" target="_blank">2026-08-16 21:11:53</a></td></tr>
<tr><td><div id="tag22125" onclick="CopyToClipboard('tag22125');return false;" class="tag-decoration">testing</div><div id="tag17352" onclick="CopyToClipboard('tag17352');return false;" class="tag-decoration">testing-163fa15</div><div id="tag3927" onclick="CopyToClipboard('tag3927');return false;" class="tag-decoration">testing-0.24.2414</div><div id="tag12737" onclick="CopyToClipboard('tag12737');return false;" class="tag-decoration">testing-v0</div><div id="tag6701" onclick="CopyToClipboard('tag6701');return false;" class="tag-decoration">testing-v0.24</div><div id="tag14509" onclick="CopyToClipboard('tag14509');return false;" class="tag-decoration">testing-v0.24.2414</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/163fa151305116e849d9b25e03018126d9a737cd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/31972782034" target="_blank">2026-08-16 21:11:58</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
