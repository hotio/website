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
<tr><td><div id="tag32625" onclick="CopyToClipboard('tag32625');return false;" class="tag-decoration">nightly</div><div id="tag7190" onclick="CopyToClipboard('tag7190');return false;" class="tag-decoration">nightly-547bdd7</div><div id="tag17350" onclick="CopyToClipboard('tag17350');return false;" class="tag-decoration">nightly-6958bdd66a00be470ff32bf144ab7bf228d37f6c</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/547bdd7f10df8b58c67a88112b9b5bd4d7614198" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27024887651" target="_blank">2026-06-05 15:46:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21173" onclick="CopyToClipboard('tag21173');return false;" class="tag-decoration">release</div><div id="tag31643" onclick="CopyToClipboard('tag31643');return false;" class="tag-decoration">release-e43ab28</div><div id="tag23945" onclick="CopyToClipboard('tag23945');return false;" class="tag-decoration">release-0.31.1</div><div id="tag29581" onclick="CopyToClipboard('tag29581');return false;" class="tag-decoration">release-v0</div><div id="tag993" onclick="CopyToClipboard('tag993');return false;" class="tag-decoration">release-v0.31</div><div id="tag3474" onclick="CopyToClipboard('tag3474');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/e43ab28939012b053d0c77c4a48aa5471025d55e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/26838580421" target="_blank">2026-06-02 18:03:43</a></td></tr>
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
