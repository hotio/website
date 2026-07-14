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
<tr><td><div id="tag10646" onclick="CopyToClipboard('tag10646');return false;" class="tag-decoration">nightly</div><div id="tag25423" onclick="CopyToClipboard('tag25423');return false;" class="tag-decoration">nightly-59617fd</div><div id="tag21239" onclick="CopyToClipboard('tag21239');return false;" class="tag-decoration">nightly-d4e02f754712f67ee1307e444d58fa8039b39e38</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/59617fdef1c2cbf64361fbd0c5401c6b3c2de2b1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/29364163096" target="_blank">2026-07-14 20:02:41</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4331" onclick="CopyToClipboard('tag4331');return false;" class="tag-decoration">release</div><div id="tag15350" onclick="CopyToClipboard('tag15350');return false;" class="tag-decoration">release-96b4dd0</div><div id="tag12733" onclick="CopyToClipboard('tag12733');return false;" class="tag-decoration">release-0.31.1</div><div id="tag31298" onclick="CopyToClipboard('tag31298');return false;" class="tag-decoration">release-v0</div><div id="tag339" onclick="CopyToClipboard('tag339');return false;" class="tag-decoration">release-v0.31</div><div id="tag13004" onclick="CopyToClipboard('tag13004');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/96b4dd01e4a540a5867d03507b464cbaa491d132" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/29364162384" target="_blank">2026-07-14 20:02:41</a></td></tr>
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
