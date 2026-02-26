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
<tr><td><div id="tag31869" onclick="CopyToClipboard('tag31869');return false;" class="tag-decoration">nightly</div><div id="tag268" onclick="CopyToClipboard('tag268');return false;" class="tag-decoration">nightly-e09d31f</div><div id="tag22257" onclick="CopyToClipboard('tag22257');return false;" class="tag-decoration">nightly-b77abd64e2e98c9410de3a9666da62430123f5a0</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/e09d31f50e5a990c09a399485f5a643b4ecf700c" target="_blank">Version update: ed58d183341502fcdd198594ce33d3a07568c396 => b77abd64e2e98c9410de3a9666da62430123f5a0</a></td><td><a href="https://github.com/hotio/stash/actions/runs/22430294604" target="_blank">2026-02-26 06:14:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25800" onclick="CopyToClipboard('tag25800');return false;" class="tag-decoration">release</div><div id="tag22559" onclick="CopyToClipboard('tag22559');return false;" class="tag-decoration">release-e21e90e</div><div id="tag18428" onclick="CopyToClipboard('tag18428');return false;" class="tag-decoration">release-0.30.1</div><div id="tag3745" onclick="CopyToClipboard('tag3745');return false;" class="tag-decoration">release-v0</div><div id="tag30796" onclick="CopyToClipboard('tag30796');return false;" class="tag-decoration">release-v0.30</div><div id="tag1426" onclick="CopyToClipboard('tag1426');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/e21e90e74befea5a0ff6361f4d3a0007d9a46558" target="_blank">Upstream update: noblevpn-f921142 => noblevpn-c3daa84</a></td><td><a href="https://github.com/hotio/stash/actions/runs/22292141128" target="_blank">2026-02-23 03:44:34</a></td></tr>
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
