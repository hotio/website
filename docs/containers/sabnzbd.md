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
<tr><td><div id="tag28061" onclick="CopyToClipboard('tag28061');return false;" class="tag-decoration">nightly</div><div id="tag28969" onclick="CopyToClipboard('tag28969');return false;" class="tag-decoration">nightly-0333852</div><div id="tag16430" onclick="CopyToClipboard('tag16430');return false;" class="tag-decoration">nightly-dbe7cb336d9f09ba4e782fb88854a7cfa8a59563</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/0333852d4a5e8f4be4ef7c5a05a96b33ac4bca7a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28391040538" target="_blank">2026-06-29 17:35:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6234" onclick="CopyToClipboard('tag6234');return false;" class="tag-decoration">release</div><div id="tag18034" onclick="CopyToClipboard('tag18034');return false;" class="tag-decoration">release-eecbbc4</div><div id="tag28550" onclick="CopyToClipboard('tag28550');return false;" class="tag-decoration">release-5.0.4</div><div id="tag2737" onclick="CopyToClipboard('tag2737');return false;" class="tag-decoration">release-v5</div><div id="tag29309" onclick="CopyToClipboard('tag29309');return false;" class="tag-decoration">release-v5.0</div><div id="tag17783" onclick="CopyToClipboard('tag17783');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/eecbbc43e6033bbd04e538b755381b415e9da9d1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28391041184" target="_blank">2026-06-29 17:35:44</a></td></tr>
<tr><td><div id="tag20789" onclick="CopyToClipboard('tag20789');return false;" class="tag-decoration">testing</div><div id="tag7328" onclick="CopyToClipboard('tag7328');return false;" class="tag-decoration">testing-14a08d5</div><div id="tag15395" onclick="CopyToClipboard('tag15395');return false;" class="tag-decoration">testing-5.1.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/14a08d585d27a8f93c71f28cad0a55409108ced9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28391041464" target="_blank">2026-06-29 17:35:44</a></td></tr>
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
