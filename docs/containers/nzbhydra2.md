---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27727" onclick="CopyToClipboard('tag27727');return false;" class="tag-decoration">release</div><div id="tag7523" onclick="CopyToClipboard('tag7523');return false;" class="tag-decoration">release-f8ecb18</div><div id="tag2870" onclick="CopyToClipboard('tag2870');return false;" class="tag-decoration">release-9.2.0</div><div id="tag14874" onclick="CopyToClipboard('tag14874');return false;" class="tag-decoration">release-v9</div><div id="tag22921" onclick="CopyToClipboard('tag22921');return false;" class="tag-decoration">release-v9.2</div><div id="tag27497" onclick="CopyToClipboard('tag27497');return false;" class="tag-decoration">release-v9.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/f8ecb18e96412050ca36a028b38158ee7c658fbd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/40672540900" target="_blank">2026-10-28 10:29:30</a></td></tr>
<tr><td><div id="tag2532" onclick="CopyToClipboard('tag2532');return false;" class="tag-decoration">testing</div><div id="tag21897" onclick="CopyToClipboard('tag21897');return false;" class="tag-decoration">testing-2d2ac6a</div><div id="tag18758" onclick="CopyToClipboard('tag18758');return false;" class="tag-decoration">testing-9.2.0</div><div id="tag2610" onclick="CopyToClipboard('tag2610');return false;" class="tag-decoration">testing-v9</div><div id="tag28995" onclick="CopyToClipboard('tag28995');return false;" class="tag-decoration">testing-v9.2</div><div id="tag29671" onclick="CopyToClipboard('tag29671');return false;" class="tag-decoration">testing-v9.2.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/2d2ac6a915cca48e65bb4279d4081aea04682b64" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/40672549904" target="_blank">2026-10-28 10:29:35</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
