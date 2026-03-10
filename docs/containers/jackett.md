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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7700" onclick="CopyToClipboard('tag7700');return false;" class="tag-decoration">release</div><div id="tag8866" onclick="CopyToClipboard('tag8866');return false;" class="tag-decoration">release-6c4b31f</div><div id="tag12921" onclick="CopyToClipboard('tag12921');return false;" class="tag-decoration">release-0.24.1323</div><div id="tag5608" onclick="CopyToClipboard('tag5608');return false;" class="tag-decoration">release-v0</div><div id="tag22707" onclick="CopyToClipboard('tag22707');return false;" class="tag-decoration">release-v0.24</div><div id="tag24456" onclick="CopyToClipboard('tag24456');return false;" class="tag-decoration">release-v0.24.1323</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/6c4b31f38e7956c331ec42cf5d31dc6dd4ad385f" target="_blank">Version update: 0.24.1316 => 0.24.1323</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22840559567" target="_blank">2026-03-09 06:02:48</a></td></tr>
<tr><td><div id="tag25891" onclick="CopyToClipboard('tag25891');return false;" class="tag-decoration">testing</div><div id="tag16499" onclick="CopyToClipboard('tag16499');return false;" class="tag-decoration">testing-f2ee3bd</div><div id="tag21674" onclick="CopyToClipboard('tag21674');return false;" class="tag-decoration">testing-0.24.1332</div><div id="tag20949" onclick="CopyToClipboard('tag20949');return false;" class="tag-decoration">testing-v0</div><div id="tag15237" onclick="CopyToClipboard('tag15237');return false;" class="tag-decoration">testing-v0.24</div><div id="tag10305" onclick="CopyToClipboard('tag10305');return false;" class="tag-decoration">testing-v0.24.1332</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/f2ee3bd5cdabd76af173122046f4644a28c9bdf8" target="_blank">Version update: 0.24.1323 => 0.24.1332</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22889118492" target="_blank">2026-03-10 05:50:46</a></td></tr>
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
