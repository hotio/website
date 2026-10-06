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
<tr><td><div id="tag17441" onclick="CopyToClipboard('tag17441');return false;" class="tag-decoration">nightly</div><div id="tag2871" onclick="CopyToClipboard('tag2871');return false;" class="tag-decoration">nightly-2a9f408</div><div id="tag7956" onclick="CopyToClipboard('tag7956');return false;" class="tag-decoration">nightly-cbda9451bb3c4143fa4d9d5c1c2b1ab8e5eb3d4d</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/2a9f4082596da8880acafaaf22b3725dcbffe89b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/37507568475" target="_blank">2026-10-06 17:57:27</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30448" onclick="CopyToClipboard('tag30448');return false;" class="tag-decoration">release</div><div id="tag28558" onclick="CopyToClipboard('tag28558');return false;" class="tag-decoration">release-4ade2e0</div><div id="tag2409" onclick="CopyToClipboard('tag2409');return false;" class="tag-decoration">release-5.1.3</div><div id="tag6302" onclick="CopyToClipboard('tag6302');return false;" class="tag-decoration">release-v5</div><div id="tag12544" onclick="CopyToClipboard('tag12544');return false;" class="tag-decoration">release-v5.1</div><div id="tag19830" onclick="CopyToClipboard('tag19830');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/4ade2e06064ce49c5f7609289882fe2fed03af47" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/37507564156" target="_blank">2026-10-06 17:57:27</a></td></tr>
<tr><td><div id="tag11823" onclick="CopyToClipboard('tag11823');return false;" class="tag-decoration">testing</div><div id="tag26282" onclick="CopyToClipboard('tag26282');return false;" class="tag-decoration">testing-624baa9</div><div id="tag1687" onclick="CopyToClipboard('tag1687');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/624baa96c4295ee201d55d21170f3ef6c0d6a0f4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/37507562582" target="_blank">2026-10-06 17:57:26</a></td></tr>
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
