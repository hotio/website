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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2657" onclick="CopyToClipboard('tag2657');return false;" class="tag-decoration">release</div><div id="tag12578" onclick="CopyToClipboard('tag12578');return false;" class="tag-decoration">release-ece0f73</div><div id="tag26190" onclick="CopyToClipboard('tag26190');return false;" class="tag-decoration">release-0.24.2251</div><div id="tag17417" onclick="CopyToClipboard('tag17417');return false;" class="tag-decoration">release-v0</div><div id="tag26539" onclick="CopyToClipboard('tag26539');return false;" class="tag-decoration">release-v0.24</div><div id="tag19625" onclick="CopyToClipboard('tag19625');return false;" class="tag-decoration">release-v0.24.2251</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/ece0f7301b04a46c1aed7e5530bf0feb2d056847" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29813269995" target="_blank">2026-07-21 08:10:38</a></td></tr>
<tr><td><div id="tag7013" onclick="CopyToClipboard('tag7013');return false;" class="tag-decoration">testing</div><div id="tag27169" onclick="CopyToClipboard('tag27169');return false;" class="tag-decoration">testing-12e7187</div><div id="tag10299" onclick="CopyToClipboard('tag10299');return false;" class="tag-decoration">testing-0.24.2251</div><div id="tag25532" onclick="CopyToClipboard('tag25532');return false;" class="tag-decoration">testing-v0</div><div id="tag23239" onclick="CopyToClipboard('tag23239');return false;" class="tag-decoration">testing-v0.24</div><div id="tag5190" onclick="CopyToClipboard('tag5190');return false;" class="tag-decoration">testing-v0.24.2251</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/12e7187562b50a893361dfc76b734c3cd0ef7fca" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29813268452" target="_blank">2026-07-21 08:10:37</a></td></tr>
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
