---
hide:
  - toc
title: hotio/seerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag12262" onclick="CopyToClipboard('tag12262');return false;" class="tag-decoration">nightly</div><div id="tag13848" onclick="CopyToClipboard('tag13848');return false;" class="tag-decoration">nightly-adbcf803332f6d1c4da04c9f2bbbcf7068e7921d</div><div id="tag601" onclick="CopyToClipboard('tag601');return false;" class="tag-decoration">nightly-99388b0</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/99388b0fd0f5129b5756483ea6b7068f5e479c86" target="_blank">Version update: f91a26befeb4d676a81e9be467510a002c628041 => adbcf803332f6d1c4da04c9f2bbbcf7068e7921d</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/20789029771" target="_blank">2026-01-07 16:45:43</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17895" onclick="CopyToClipboard('tag17895');return false;" class="tag-decoration">release</div><div id="tag5785" onclick="CopyToClipboard('tag5785');return false;" class="tag-decoration">release-2.7.3</div><div id="tag28080" onclick="CopyToClipboard('tag28080');return false;" class="tag-decoration">release-1c8bad4</div><div id="tag3119" onclick="CopyToClipboard('tag3119');return false;" class="tag-decoration">release-v2</div><div id="tag23792" onclick="CopyToClipboard('tag23792');return false;" class="tag-decoration">release-v2.7</div><div id="tag11268" onclick="CopyToClipboard('tag11268');return false;" class="tag-decoration">release-v2.7.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/1c8bad48a1e254dbffa5067f33ab1d8ac485ccf3" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/20842479703" target="_blank">2026-01-09 05:41:10</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
