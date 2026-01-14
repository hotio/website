---
hide:
  - toc
title: hotio/stash
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/stash){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/stash){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/stashapp/stash){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag27213" onclick="CopyToClipboard('tag27213');return false;" class="tag-decoration">nightly</div><div id="tag13045" onclick="CopyToClipboard('tag13045');return false;" class="tag-decoration">nightly-3362751</div><div id="tag18866" onclick="CopyToClipboard('tag18866');return false;" class="tag-decoration">nightly-ed3a2393667a3a9ea63fb40ec09c66717ca086f1</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/33627519e3de27886d29fcc4137722d3ac23cf40" target="_blank">Version update: ed3a2393667a3a9ea63fb40ec09c66717ca086f1 => ed3a2393667a3a9ea63fb40ec09c66717ca086f1</a></td><td><a href="https://github.com/hotio/stash/actions/runs/20991148531" target="_blank">2026-01-14 10:39:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5231" onclick="CopyToClipboard('tag5231');return false;" class="tag-decoration">release</div><div id="tag13457" onclick="CopyToClipboard('tag13457');return false;" class="tag-decoration">release-0.30.1</div><div id="tag2663" onclick="CopyToClipboard('tag2663');return false;" class="tag-decoration">release-3fa5ed5</div><div id="tag28886" onclick="CopyToClipboard('tag28886');return false;" class="tag-decoration">release-v0</div><div id="tag26600" onclick="CopyToClipboard('tag26600');return false;" class="tag-decoration">release-v0.30</div><div id="tag25848" onclick="CopyToClipboard('tag25848');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/3fa5ed559cc234a1ea206fb097359dcbb25a23a8" target="_blank">Upstream update: noblevpn-b820b9e => noblevpn-6a934c2</a></td><td><a href="https://github.com/hotio/stash/actions/runs/20898167800" target="_blank">2026-01-11 16:17:53</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="stash" \
        -p 9999:9999 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9999/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/stash
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      stash:
        container_name: stash
        image: ghcr.io/hotio/stash
        ports:
          - "9999:9999"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9999/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
