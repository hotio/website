---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag2203" onclick="CopyToClipboard('tag2203');return false;" class="tag-decoration">nightly</div><div id="tag9817" onclick="CopyToClipboard('tag9817');return false;" class="tag-decoration">nightly-523142e</div><div id="tag331" onclick="CopyToClipboard('tag331');return false;" class="tag-decoration">nightly-cd0987995d940cc455401c8a3827eeaa8f1747c8</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/523142e599e903476a63b03561d974cffdb0c816" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/40913177512" target="_blank">2026-10-29 16:35:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26322" onclick="CopyToClipboard('tag26322');return false;" class="tag-decoration">release</div><div id="tag12004" onclick="CopyToClipboard('tag12004');return false;" class="tag-decoration">release-1efe991</div><div id="tag10835" onclick="CopyToClipboard('tag10835');return false;" class="tag-decoration">release-5.1.3</div><div id="tag29320" onclick="CopyToClipboard('tag29320');return false;" class="tag-decoration">release-v5</div><div id="tag16715" onclick="CopyToClipboard('tag16715');return false;" class="tag-decoration">release-v5.1</div><div id="tag13920" onclick="CopyToClipboard('tag13920');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/1efe9918f7ea28e4b9e1d2ce55a24307813b4009" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/40568029850" target="_blank">2026-10-27 19:19:10</a></td></tr>
<tr><td><div id="tag16125" onclick="CopyToClipboard('tag16125');return false;" class="tag-decoration">testing</div><div id="tag20967" onclick="CopyToClipboard('tag20967');return false;" class="tag-decoration">testing-b267447</div><div id="tag24881" onclick="CopyToClipboard('tag24881');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/b2674478b8c45212dc6aed5aef04053d20184607" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/40568022947" target="_blank">2026-10-27 19:19:07</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
