---
hide:
  - toc
title: hotio/tautulli
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/tautulli){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/tautulli){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/tautulli/tautulli){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6706" onclick="CopyToClipboard('tag6706');return false;" class="tag-decoration">release</div><div id="tag13741" onclick="CopyToClipboard('tag13741');return false;" class="tag-decoration">release-117fa9f</div><div id="tag16826" onclick="CopyToClipboard('tag16826');return false;" class="tag-decoration">release-2.18.2</div><div id="tag1958" onclick="CopyToClipboard('tag1958');return false;" class="tag-decoration">release-v2</div><div id="tag24239" onclick="CopyToClipboard('tag24239');return false;" class="tag-decoration">release-v2.18</div><div id="tag9134" onclick="CopyToClipboard('tag9134');return false;" class="tag-decoration">release-v2.18.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/117fa9f04bb5307d719899fce168afd0d670f65a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/41559246864" target="_blank">2026-11-03 01:21:45</a></td></tr>
<tr><td><div id="tag18434" onclick="CopyToClipboard('tag18434');return false;" class="tag-decoration">testing</div><div id="tag6926" onclick="CopyToClipboard('tag6926');return false;" class="tag-decoration">testing-3f46d2d</div><div id="tag13433" onclick="CopyToClipboard('tag13433');return false;" class="tag-decoration">testing-2.18.2</div><div id="tag17042" onclick="CopyToClipboard('tag17042');return false;" class="tag-decoration">testing-v2</div><div id="tag31258" onclick="CopyToClipboard('tag31258');return false;" class="tag-decoration">testing-v2.18</div><div id="tag14808" onclick="CopyToClipboard('tag14808');return false;" class="tag-decoration">testing-v2.18.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/3f46d2dec214c63f9bd04958f3a201753645c842" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/41559247308" target="_blank">2026-11-03 01:21:46</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="tautulli" \
        -p 8181:8181 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8181/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      tautulli:
        container_name: tautulli
        image: ghcr.io/hotio/tautulli
        ports:
          - "8181:8181"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8181/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
