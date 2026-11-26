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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32576" onclick="CopyToClipboard('tag32576');return false;" class="tag-decoration">release</div><div id="tag16424" onclick="CopyToClipboard('tag16424');return false;" class="tag-decoration">release-57eec42</div><div id="tag9764" onclick="CopyToClipboard('tag9764');return false;" class="tag-decoration">release-0.25.39</div><div id="tag9191" onclick="CopyToClipboard('tag9191');return false;" class="tag-decoration">release-v0</div><div id="tag3541" onclick="CopyToClipboard('tag3541');return false;" class="tag-decoration">release-v0.25</div><div id="tag16496" onclick="CopyToClipboard('tag16496');return false;" class="tag-decoration">release-v0.25.39</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/57eec420cd98383d89eb04ebc511d45ecc4e5970" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/45608800686" target="_blank">2026-11-25 11:54:46</a></td></tr>
<tr><td><div id="tag13386" onclick="CopyToClipboard('tag13386');return false;" class="tag-decoration">testing</div><div id="tag2020" onclick="CopyToClipboard('tag2020');return false;" class="tag-decoration">testing-1cc9c13</div><div id="tag16122" onclick="CopyToClipboard('tag16122');return false;" class="tag-decoration">testing-0.25.39</div><div id="tag30560" onclick="CopyToClipboard('tag30560');return false;" class="tag-decoration">testing-v0</div><div id="tag22692" onclick="CopyToClipboard('tag22692');return false;" class="tag-decoration">testing-v0.25</div><div id="tag17404" onclick="CopyToClipboard('tag17404');return false;" class="tag-decoration">testing-v0.25.39</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/1cc9c13395fd093ac6fb593483fc2bd497b06828" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/45748091090" target="_blank">2026-11-26 03:18:40</a></td></tr>
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
