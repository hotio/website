---
hide:
  - toc
title: hotio/tautulli
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/tautulli){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/tautulli){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/tautulli/tags){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24723" onclick="CopyToClipboard('tag24723');return false;" class="tag-decoration">release</div><div id="tag27714" onclick="CopyToClipboard('tag27714');return false;" class="tag-decoration">release-2.16.0</div><div id="tag16834" onclick="CopyToClipboard('tag16834');return false;" class="tag-decoration">release-cc49b33</div><div id="tag25509" onclick="CopyToClipboard('tag25509');return false;" class="tag-decoration">release-v2</div><div id="tag19133" onclick="CopyToClipboard('tag19133');return false;" class="tag-decoration">release-v2.16</div><div id="tag4327" onclick="CopyToClipboard('tag4327');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/cc49b33ab9fa9e48ae989ccf86fa53dbfffb707f" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/20850354124" target="_blank">2026-01-09 11:23:37</a></td></tr>
<tr><td><div id="tag30986" onclick="CopyToClipboard('tag30986');return false;" class="tag-decoration">testing</div><div id="tag8260" onclick="CopyToClipboard('tag8260');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag21263" onclick="CopyToClipboard('tag21263');return false;" class="tag-decoration">testing-8f5dc9a</div><div id="tag7996" onclick="CopyToClipboard('tag7996');return false;" class="tag-decoration">testing-v2</div><div id="tag5132" onclick="CopyToClipboard('tag5132');return false;" class="tag-decoration">testing-v2.16</div><div id="tag23447" onclick="CopyToClipboard('tag23447');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/8f5dc9a7bbb49e62b411f9fb48a8870e1bc59c8f" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/20845771611" target="_blank">2026-01-09 08:22:47</a></td></tr>
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
        -e WEBUI_PORTS="8181/tcp" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

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
          - WEBUI_PORTS=8181/tcp
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
