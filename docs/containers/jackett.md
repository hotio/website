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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28667" onclick="CopyToClipboard('tag28667');return false;" class="tag-decoration">release</div><div id="tag17627" onclick="CopyToClipboard('tag17627');return false;" class="tag-decoration">release-6811327</div><div id="tag25651" onclick="CopyToClipboard('tag25651');return false;" class="tag-decoration">release-0.24.2517</div><div id="tag19342" onclick="CopyToClipboard('tag19342');return false;" class="tag-decoration">release-v0</div><div id="tag8902" onclick="CopyToClipboard('tag8902');return false;" class="tag-decoration">release-v0.24</div><div id="tag10707" onclick="CopyToClipboard('tag10707');return false;" class="tag-decoration">release-v0.24.2517</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/681132745a7ed8005657367c22311396e110c9b2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/33594108954" target="_blank">2026-09-02 05:17:39</a></td></tr>
<tr><td><div id="tag781" onclick="CopyToClipboard('tag781');return false;" class="tag-decoration">testing</div><div id="tag27218" onclick="CopyToClipboard('tag27218');return false;" class="tag-decoration">testing-cbe0ef2</div><div id="tag28841" onclick="CopyToClipboard('tag28841');return false;" class="tag-decoration">testing-0.24.2517</div><div id="tag2429" onclick="CopyToClipboard('tag2429');return false;" class="tag-decoration">testing-v0</div><div id="tag5710" onclick="CopyToClipboard('tag5710');return false;" class="tag-decoration">testing-v0.24</div><div id="tag13919" onclick="CopyToClipboard('tag13919');return false;" class="tag-decoration">testing-v0.24.2517</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/cbe0ef27f8f98d1240ec0f6cd14916fc1c4e96c8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/33594114988" target="_blank">2026-09-02 05:17:46</a></td></tr>
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
