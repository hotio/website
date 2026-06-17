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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18532" onclick="CopyToClipboard('tag18532');return false;" class="tag-decoration">release</div><div id="tag10582" onclick="CopyToClipboard('tag10582');return false;" class="tag-decoration">release-dc2ad07</div><div id="tag12215" onclick="CopyToClipboard('tag12215');return false;" class="tag-decoration">release-0.24.2077</div><div id="tag1825" onclick="CopyToClipboard('tag1825');return false;" class="tag-decoration">release-v0</div><div id="tag13859" onclick="CopyToClipboard('tag13859');return false;" class="tag-decoration">release-v0.24</div><div id="tag24834" onclick="CopyToClipboard('tag24834');return false;" class="tag-decoration">release-v0.24.2077</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/dc2ad0746de5a6314f63119712bf10fb6f246dfa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27669205910" target="_blank">2026-06-17 06:02:58</a></td></tr>
<tr><td><div id="tag7367" onclick="CopyToClipboard('tag7367');return false;" class="tag-decoration">testing</div><div id="tag32759" onclick="CopyToClipboard('tag32759');return false;" class="tag-decoration">testing-4371f9f</div><div id="tag9994" onclick="CopyToClipboard('tag9994');return false;" class="tag-decoration">testing-0.24.2077</div><div id="tag10322" onclick="CopyToClipboard('tag10322');return false;" class="tag-decoration">testing-v0</div><div id="tag24225" onclick="CopyToClipboard('tag24225');return false;" class="tag-decoration">testing-v0.24</div><div id="tag20554" onclick="CopyToClipboard('tag20554');return false;" class="tag-decoration">testing-v0.24.2077</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/4371f9f94adc6d0f37499f352f9b0410410f80a5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27669201227" target="_blank">2026-06-17 06:02:51</a></td></tr>
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
