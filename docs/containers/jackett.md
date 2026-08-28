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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30487" onclick="CopyToClipboard('tag30487');return false;" class="tag-decoration">release</div><div id="tag1077" onclick="CopyToClipboard('tag1077');return false;" class="tag-decoration">release-0a1699a</div><div id="tag6543" onclick="CopyToClipboard('tag6543');return false;" class="tag-decoration">release-0.24.2486</div><div id="tag19435" onclick="CopyToClipboard('tag19435');return false;" class="tag-decoration">release-v0</div><div id="tag10685" onclick="CopyToClipboard('tag10685');return false;" class="tag-decoration">release-v0.24</div><div id="tag20985" onclick="CopyToClipboard('tag20985');return false;" class="tag-decoration">release-v0.24.2486</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/0a1699a8fb095bc6f02b915a2dea1feb1d5cb0cc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/33154317889" target="_blank">2026-08-28 08:10:44</a></td></tr>
<tr><td><div id="tag25932" onclick="CopyToClipboard('tag25932');return false;" class="tag-decoration">testing</div><div id="tag21729" onclick="CopyToClipboard('tag21729');return false;" class="tag-decoration">testing-3b485bf</div><div id="tag6010" onclick="CopyToClipboard('tag6010');return false;" class="tag-decoration">testing-0.24.2486</div><div id="tag27198" onclick="CopyToClipboard('tag27198');return false;" class="tag-decoration">testing-v0</div><div id="tag12417" onclick="CopyToClipboard('tag12417');return false;" class="tag-decoration">testing-v0.24</div><div id="tag22847" onclick="CopyToClipboard('tag22847');return false;" class="tag-decoration">testing-v0.24.2486</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/3b485bf67418cc7aae8178b3b11b06e32069ff66" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/33154316961" target="_blank">2026-08-28 08:10:43</a></td></tr>
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
